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
        return new CourseCollection(Course::all());
    }

    public function store(StoreCourseRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = auth("sanctum")->id();
        
        $course = Course::create($validated);
        return new CourseResource($course);
    }
 
    public function show(Request $request, Course $course)
    {
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
