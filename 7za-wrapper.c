#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        fprintf(stderr, "Usage: 7za-wrapper <command> [args...]\n");
        return 1;
    }

    // Check if this is an extract command
    int is_extract = (strcmp(argv[1], "x") == 0 || strcmp(argv[1], "e") == 0);
    
    // Count args and check if -snl- is already present
    int has_snl = 0;
    for (int i = 2; i < argc; i++) {
        if (strcmp(argv[i], "-snl-") == 0) {
            has_snl = 1;
            break;
        }
    }
    
    int new_argc = argc + (is_extract && !has_snl ? 1 : 0);
    
    // Allocate argument array (+1 for NULL terminator)
    char **new_argv = (char **)malloc((new_argc + 1) * sizeof(char *));
    if (!new_argv) {
        fprintf(stderr, "Memory allocation failed\n");
        return 1;
    }
    
    // Copy program name
    new_argv[0] = argv[0];
    
    // Copy command
    new_argv[1] = argv[1];
    
    int idx = 2;
    
    // Insert -snl- after command for extract operations
    if (is_extract && !has_snl) {
        new_argv[idx++] = "-snl-";
    }
    
    // Copy remaining arguments
    for (int i = 2; i < argc; i++) {
        new_argv[idx++] = argv[i];
    }
    new_argv[idx] = NULL;
    
    // Find the real 7za.exe in the same directory
    char real_7za[1024];
    char this_path[1024];
    
    DWORD len = GetModuleFileNameA(NULL, this_path, sizeof(this_path));
    if (len == 0 || len >= sizeof(this_path)) {
        fprintf(stderr, "Failed to get module path\n");
        free(new_argv);
        return 1;
    }
    
    // Find the last backslash and replace filename with 7za-real.exe
    char *last_slash = strrchr(this_path, '\\');
    if (last_slash) {
        strcpy(last_slash + 1, "7za-real.exe");
        strncpy(real_7za, this_path, sizeof(real_7za) - 1);
        real_7za[sizeof(real_7za) - 1] = '\0';
    } else {
        strncpy(real_7za, "7za-real.exe", sizeof(real_7za) - 1);
        real_7za[sizeof(real_7za) - 1] = '\0';
    }
    
    // Build command line for CreateProcess
    // Need to quote arguments with spaces
    char cmdline[4096] = {0};
    strncpy(cmdline, real_7za, sizeof(cmdline) - 1);
    
    for (int i = 1; i < new_argc && i < 100; i++) {
        strncat(cmdline, " ", sizeof(cmdline) - strlen(cmdline) - 1);
        // Simple quoting: wrap in quotes if contains space
        if (strchr(new_argv[i], ' ')) {
            strncat(cmdline, "\"", sizeof(cmdline) - strlen(cmdline) - 1);
            strncat(cmdline, new_argv[i], sizeof(cmdline) - strlen(cmdline) - 1);
            strncat(cmdline, "\"", sizeof(cmdline) - strlen(cmdline) - 1);
        } else {
            strncat(cmdline, new_argv[i], sizeof(cmdline) - strlen(cmdline) - 1);
        }
    }
    
    // Execute the real 7za
    STARTUPINFOA si = {0};
    PROCESS_INFORMATION pi = {0};
    si.cb = sizeof(si);
    
    if (!CreateProcessA(
        real_7za,
        cmdline,
        NULL,
        NULL,
        FALSE,
        0,
        NULL,
        NULL,
        &si,
        &pi
    )) {
        fprintf(stderr, "CreateProcess failed for %s (error %lu)\n", real_7za, GetLastError());
        free(new_argv);
        return 1;
    }
    
    // Wait for process to finish
    WaitForSingleObject(pi.hProcess, INFINITE);
    
    DWORD exit_code = 1;
    GetExitCodeProcess(pi.hProcess, &exit_code);
    
    CloseHandle(pi.hProcess);
    CloseHandle(pi.hThread);
    free(new_argv);
    
    return (int)exit_code;
}
