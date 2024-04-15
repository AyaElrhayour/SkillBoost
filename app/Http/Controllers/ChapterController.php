<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ChapterResource;
use App\Http\Resources\ChapterCollection;
use App\Http\Requests\StoreChapterRequest;
use App\Http\Requests\UpdateChapterRequest;

class ChapterController extends Controller
{
    public function index(){
        return new  ChapterCollection(Chapter::all());
    }

    public function store (StoreChapterRequest $request){
        $validated = $request->validated();
        $validated['user_id'] = Auth::id();
        
        $course = Chapter::create($validated);
        return new ChapterResource($course);
    }

    public function update(UpdateChapterRequest $request, Chapter $chapter){
        $validated = $request->validated();

        $chapter->update($validated);

        return new ChapterResource($chapter);
    }

    public function destroy(Request $request, Chapter $chapter){
        $chapter->delete();

        return response()->noContent();
    }
}
