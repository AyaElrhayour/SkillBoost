<?php

namespace App\Repositories\Implementations;

interface RepositoryInterface
{
    public function index();

    public function store();

    public function update();

    public function destroy();
}