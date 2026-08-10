export function getAppInitials(appId: string, name: string): string {
  if (appId === 'workbuddy') return 'WB';
  if (appId === 'trae-work') return 'TW';
  if (appId === 'qoder-work') return 'QW';
  if (appId === 'catpaw') return 'CP';
  if (appId === 'qwen-office') return 'QO';
  if (appId === 'hana-agent') return 'HA';
  if (appId === 'kimi') return 'KW';
  if (appId === 'opencode') return 'OC';
  if (appId === 'doubao') return 'DB';
  if (appId === 'agnes-code') return 'AC';
  if (appId === 'minimax-code') return 'MC';
  if (appId === 'astronclaw') return 'XC';
  return name.slice(0, 2).toUpperCase();
}
