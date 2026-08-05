export function getAppInitials(appId: string, name: string): string {
  if (appId === 'workbuddy') return 'WB';
  if (appId === 'trae-work') return 'TW';
  if (appId === 'qoder-work') return 'QW';
  if (appId === 'catpaw') return 'CP';
  if (appId === 'qwen-office') return 'QO';
  return name.slice(0, 2).toUpperCase();
}
