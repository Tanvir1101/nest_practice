import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';


@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjasService: NinjasService) { }

    // GET /ninjas?weapon --> []
    @Get()
    getNinjas(@Query('weapon') weapon: 'sword' | 'axe') {

        return this.ninjasService.getNinjas(weapon);
    }

    // GET /ninjas/:id --> {...}F
    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.ninjasService.getNinja(id);
        }
        catch (err) {
            throw new NotFoundException()
        }
    }

    // POST /ninjas
    @Post()
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto);
    }

    // PUT /ninjas/:id --> {...}
    @Put(':id')
    updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: CreateNinjaDto) {
        return this.ninjasService.updateinjas(id, updateNinjaDto);
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id', ParseIntPipe) id: number) {
        return this.ninjasService.removeNinja(id);
    }
}