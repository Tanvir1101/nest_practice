import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';


@Controller('ninjas')
export class NinjasController {
    // GET /ninjas --> []
    @Get()
  getNinjas() {
        return [];
    }

    // GET /ninjas/:id --> {...}
    @Get(':id')
    getOneNinja(@Param('id') id: string) {
        return {
            id,
        };
    }

    // POST /ninjas
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return {
            name: createNinjaDto.name
        };
    }

    // PUT /ninjas/:id --> {...}
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: CreateNinjaDto) {
        return {
            id,
            name: updateNinjaDto.name
        };
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja() {
        return {};
    }
}