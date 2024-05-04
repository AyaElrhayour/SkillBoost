<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        $users = User::all();
        return new UserCollection($users);
    }

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


    public function updateUserBanStatus(Request $request, $userId)
{
    $user = User::findOrFail($userId);
    $user->is_banned = $request->input('is_banned');
    $user->save();

    return response()->json(['message' => 'User ban status updated successfully']);
}
}
