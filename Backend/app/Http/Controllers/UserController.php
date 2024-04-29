<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getTeachers()
    {
        $teachers = User::where('role', 'Teacher')->get();
        return new UserCollection($teachers);
    }

    
    public function getStudents()
    {
        $students = User::where('role', 'Student')->get();
        return new UserCollection($students);
    }
}
