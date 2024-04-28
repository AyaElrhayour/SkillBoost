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

class PostController extends Controller
{
    public function index()
    {
        return new PostCollection(Post::with("user", "comments")->get());
    }

    public function store(StorePostRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = Auth::id();
        $validated['approved'] = false;
        $attachmentPath = $request->file('img')->store('postImages', 'public');
        $validated['img'] = $attachmentPath;
        $post = Post::create($validated);
        return new PostResource($post);
    }

    public function show(Request $request, Post $post)
    {
        $post->load("user", "comments");
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
