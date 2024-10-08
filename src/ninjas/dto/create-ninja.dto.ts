import { IsIn, MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;
    @IsIn(['sword', 'axe'], {message: 'use correct weapon'})
    weapon: 'sword' | 'axe';
}