<?php

// namespace App\Http\Controllers;

// use App\Models\User;
// use Illuminate\Http\Request;
// use App\Http\Controllers\Controller;
// use Illuminate\Support\Facades\Hash;

// class AuthController extends Controller
// {
//     public function register( Request $request){
//         $data = $request->validate([
//             'name' => 'required',
//             'email' => 'required|unique:users',
//             'password' => 'required',
//             'role' => 'in:Admin,Teacher,Student',
//         ]);

//         $data['password'] = Hash::make($data['password']);

//         $user = User::create($data);
//         $token = $user->createToken('my-token')->plainTextToken;

//         return response()->json([
//             'data' => $user,
//             'token' =>$token,
//             'Type' => 'Bearer'
//         ]);
//     }

//     public function login(Request $request)
//     {
//         $fields = $request->validate([

//             'email' => 'required',
//             'password' => 'required',
//         ]);

//         $user = User::where('email', $fields['email'])->first();

//         if (!$user || !Hash::check($fields['password'], $user->password)) {
//             return response([
//                 'message' => 'Wrong credentials'
//             ]);
//         }

//         $token = $user->createToken('my-token')->plainTextToken;

//         return response()->json([
//             'token' => $token,
//             'Type' => 'Bearer',
//             'role' => $user->role 
//         ]);
//     }
// }


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($validated)) {
            return response()->json([
                'message' => 'Log in failed'
            ], 401);
        }

        $user = User::where('email', $validated['email'])->first();

        return response()->json([
            'data' => $user,
            'access_token' => $user->createToken('api_token')->plainTextToken,
            'token_type' => 'Bearer',
        ]);
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
            'role' => 'in:Admin,Teacher,Student',
        ]);

        $validated['password'] = Hash::make($validated['password']);
        $user =User::create($validated);
        
        return response()->json([
            'data' => $user,
            'access_token' => $user->createToken('api_token')->plainTextToken,
            'token_type' => 'Bearer',
        ], 201);
    }
}

