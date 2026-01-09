<?php

namespace App\Enums;

enum TargetType: string
{
    case PRODI = 'prodi';
    case FACULTY = 'faculty';

    public function label(): string
    {
        return match ($this) {
            self::PRODI => 'Program Studi',
            self::FACULTY => 'Fakultas',
        };
    }
}
