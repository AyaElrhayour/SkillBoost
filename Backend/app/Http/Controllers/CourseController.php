<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Resources\CourseCollection;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    public function index()
    {
        return new CourseCollection(Course::with('topic', "chapters", "teacher")->get());
    }

    public function getByLevel(Request $request, string $level)
    {
        $courses = Course::where('level', $level)->with('topic', 'chapters', 'teacher')->get();
        return new CourseCollection($courses);
    }

    public function getByTopic(Request $request, string $topic)
    {
        $courses = Course::where('topic_id', $topic)->with('topic', 'chapters', 'teacher')->get();
        return new CourseCollection($courses);
    }

    public function search(Request $request)
    {
        $searchTerm = $request->query('q') ?? $request->input('query');

        $courses = Course::query()
            ->where('title', 'like', "%$searchTerm%")
            ->orWhereHas('teacher', function ($query) use ($searchTerm) {
                $query->where('name', 'like', "%$searchTerm%");
            })
            ->with('topic', 'chapters', 'teacher')
            ->get();

        return new CourseCollection($courses);
    }

    public function store(StoreCourseRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = auth("sanctum")->id();
        $coverPath = $request->file('cover')->store('coursesCover', 'public');
        $validated['cover'] = $coverPath;

        $course = Course::create($validated);
        return new CourseResource($course);
    }

    public function show(Request $request, Course $course)
    {
        $course->load('topic', 'chapters', "teacher");
        return new CourseResource($course);
    }

    public function update(UpdateCourseRequest $request, Course $course)
    {
        $validated = $request->validated();

        $course->update($validated);

        return new CourseResource($course);
    }

    public function destroy(Request $request, Course $course)
    {
        $course->delete();

        return response()->noContent();
    }
}
