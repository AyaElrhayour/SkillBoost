<?php

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
        $profilePicPath = $request->file('profile_pic')->store('profilePics', 'public');
        $validated['profile_pic'] = $profilePicPath;
        $user = User::create($validated);

        return response()->json([
            'data' => $user,
            'access_token' => $user->createToken('api_token')->plainTextToken,
            'token_type' => 'Bearer',
        ], 201);
    }

    public function logout(Request $request)
    {
        $user = Auth::guard('sanctum')->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }

        try {
            $user->tokens()->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to revoke tokens'], 500);
        }

        return response()->json(['message' => 'Tokens revoked successfully']);
    }
}
