import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {

    private ninjas = [
        { id: 0, name: 'ninjaA', weapon: 'sword' },
        { id: 1, name: 'ninjaB', weapon: 'axe' },
    ]

    getNinjas(weapon?: 'sword' | 'axe') {
        if (weapon) {
            const data = this.ninjas.filter(ninja => ninja.weapon === weapon);
            if (data.length > 0) {
                return data;
            }
            else {
                const data = [
                    {
                        data: 'no data found'
                    }
                ]
                return data;
            }
        }
        return this.ninjas;
    }

    getNinja(id: number) {
        const ninja = this.ninjas.find((ninja) => ninja.id === id)
        if (!ninja) {
            throw new Error('Ninja not found');
        }
        return ninja;

    }

    createNinja(cretaeNinjaDto: CreateNinjaDto) {
        const newNinja = {
            ...cretaeNinjaDto,
            id: Date.now(),
        };
        this.ninjas.push(newNinja);
        return newNinja;
    }

    updateinjas = (id: number, updateNinjaDto: UpdateNinjaDto) => {
        this.ninjas = this.ninjas.map((ninja) => {
            if (ninja.id === id) {
                return {
                    ...ninja,
                    ...updateNinjaDto
                }
            }
            return ninja;
        });

        return this.getNinja(id);
    }

    removeNinja(id: number) {
        const toBeRemoved = this.getNinja(id)
        this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
        return toBeRemoved;
    }
}
