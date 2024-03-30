<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TopicResource;
use App\Http\Resources\TopicCollection;
use App\Http\Requests\StoreTopicRequest;
use App\Http\Requests\UpdateTopicRequest;

class TopicController extends Controller
{
    public function index()
    {
        return new TopicCollection(Topic::all());
    }

    public function store(StoreTopicRequest $request)
    {
       $validated = $request->validated();

       $topic = Topic::create($validated);

       return new TopicResource($topic);
    }

    public function show(Request $request, Topic $topic )
    {
        return new TopicResource($topic);
    }

    public function update(UpdateTopicRequest $request, Topic $topic)
    {
        $validated = $request->validated();

        $topic->update($validated);

        return new TopicResource($topic);
    }

    public function destroy(Request $request, Topic $topic)
    {
        $topic->delete();

        return response()->noContent();
    }
}
