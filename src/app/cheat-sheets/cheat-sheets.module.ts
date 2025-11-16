import { NgModule } from '@angular/core';

import { GameBaseModule } from './game-base/game-base.module';
// import { GameModsModule } from './game-mods/game-mods.module';
import { ROOT_GAME_BASE } from './game-base/game-base.routes';
// import { ROOT_GAME_MODS } from './game-mods/game-mods.routes';

export const CHEAT_SHEET_CATEGORIES = {
  [ROOT_GAME_BASE]: '异星工厂基础游戏',
  // [ROOT_GAME_MODS]: '异星工厂模组',
} as const;

export type CheatSheetCategory = keyof typeof CHEAT_SHEET_CATEGORIES;

@NgModule({
  exports: [
    GameBaseModule,
    // GameModsModule
  ],
})
export class CheatSheetsModule {}
