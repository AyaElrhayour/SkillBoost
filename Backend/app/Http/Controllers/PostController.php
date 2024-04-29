<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostCollection;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    public function index()
    {
        return new PostCollection(Post::with("user", "comments", "topic")->get());
    }

    public function store(StorePostRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = auth("sanctum")->id();
        if ($request->hasFile('img')) {
            $imgPath = $request->file('img')->store('postImages', 'public');
            $validated['img'] = $imgPath;
        } else {
            return response()->json(['error' => 'File not uploaded'], 422);
        }

        $post = Post::create($validated);
        return new PostResource($post);
    }

    public function approvePost(Post $post)
    {
       $post->update(['approved' => true]);
        return new PostResource($post);
    }

    public function show(Request $request, Post $post)
    {
        $post->load("user", "comments", "topic");
        return new PostResource($post);
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $validated = $request->validated();

        $post->update($validated);

        return new PostResource($post);
    }

    public function destroy(Request $request, Post $post)
    {
        $post->delete();

        return response()->noContent();
    }
}
