<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Http\Resources\CommentCollection;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function index()
    {
        return new CommentCollection(Comment::all());
    }

    public function store(StoreCommentRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = Auth::id();
        
        $comment = Comment::create($validated);
        return new CommentResource($comment);
    }

    public function show(Request $request, Comment $comment)
    {
        return new CommentResource($comment);
    }

    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        $validated = $request->validated();

        $comment->update($validated);

        return new CommentResource($comment);
    }

    public function destroy(Request $request, Comment $comment)
    {
        $comment->delete();

        return response()->noContent();
    }
}
