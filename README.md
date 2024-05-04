
# SkillBoost

SkillBoost is an innovative web platform designed to energize the learning process. By offering a centralized space, it gives users access to a multitude of educational resources.

## API Reference

#### Register

```http
  POST /api/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | name of the user |
| `email` | `string` | email of the user |
| `password` | `string` | password of the user |
| `profile_pic` | `string` | image of the user |
| `role` | `string` | role of the user |
| `about` | `string` | information about the user |

#### Login

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | email of the user |
| `password` | `string` | password of the user |

#### Logout

```http
  POST /api/auth/logout
```

#### Ban User

```http
  PUT /api/users/ban/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `integer` | **Required**. Id of user to ban |

#### Get all courses

```http
  GET /api/courses
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  id of the course |
| `title` | `string` | title of the course |
| `description` | `string` | description of the course |
| `level` | `string` | level of the course |
| `cover` | `string` | cover of the course |
| `topic_id` | `integer` | topic id of the course |
| `user_id` | `integer` | user id of the course |


#### Create course

```http
  POST /api/courses
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | title of the course |
| `description` | `string` | description of the course |
| `level` | `string` | level of the course |
| `cover` | `string` | cover of the course |
| `topic_id` | `integer` | topic id of the course |
| `user_id` | `integer` | user id of the course |


#### Delete course

```http
  DELETE /api/courses/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of course to delete |

#### Update course

```http
  PUT /api/courses/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of course to update |
| `title` | `string` | title of the course |
| `description` | `string` | description of the course |
| `level` | `string` | level of the course |
| `cover` | `string` | cover of the course |
| `topic_id` | `integer` | topic id of the course |
| `user_id` | `integer` | user id of the course |

#### Get course

```http
  GET /api/courses/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of course to fetch |


#### Get all topics

```http
  GET /api/topics
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` |  id of the topic |
| `name` | `string` | name of the topic |
| `description` | `string` | description of the topic |

#### Create topic

```http
  POST /api/topics
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | name of the topic |
| `description` | `string` | description of the topic |

#### Update topic

```http
  PUT /api/topics/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `integer` | **Required**. Id of topic to update |
| `name` | `string` | name of the topic |
| `description` | `string` | description of the topic |

#### Get topic

```http
  GET /api/topics/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `integer` | **Required**. Id of topic to fetch |

#### Delete topic

```http
  DELETE /api/topics/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id of topic to delete |

#### Create post

```http
  POST /api/posts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | title of the post |
| `content` | `string` | content of the post |
| `img` | `string` | image of the post |
| `topic_id` | `integer` | topic id of the post |
| `user_id` | `integer` | user id of the post |

#### Get one post

```http
  GET /api/posts/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

#### Delete post

```http
  DELETE /api/posts/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id of post to delete |

#### Update post

```http
  PUT /api/posts/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id of post to update |
| `title` | `string` | title of the post |
| `content` | `string` | content of the post |
| `img` | `string` | image of the post |
| `topic_id` | `integer` | topic id of the post |
| `user_id` | `integer` | user id of the post |

#### Create chapter

```http
  POST /api/chapters
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | title of the chapter |
| `content` | `string` | content of the chapter |
| `attachement` | `string` | attachement of the chapter |
| `course_id` | `integer` | course id of the course |

#### Update chapter

```http
  PUT /api/chapters/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `integer` | **Required**. Id of chapter to update |
| `title` | `string` | title of the chapter |
| `content` | `string` | content of the chapter |
| `attachement` | `string` | attachement of the chapter |
| `course_id` | `integer` | course id of the course |

#### Get all chapters

```http
  GET /api/chapters
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | id of the chapter |
| `title` | `string` | title of the chapter |
| `content` | `string` | content of the chapter |
| `attachement` | `string` | attachement of the chapter |
| `course_id` | `integer` | course id of the course |

#### Get chapter

```http
  GET /api/chapters/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `integer` | **Required**. Id of chapter to fetch |

#### Delete chapter

```http
  DELETE /api/chapters/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `integer` | **Required**. Id of chapter to delete |

#### Create Comment

```http
  POST /api/comments/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `integer` | id of user who commented |
| `post_id` | `integer` | id of the post |
| `content` | `string` | content of the comment |

#### Get all Comments

```http
  GET /api/comments/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | id of comment |
| `user_id` | `integer` | id of user who commented |
| `post_id` | `integer` | id of the post |
| `content` | `string` | content of the comment |

#### Delete Comment

```http
  DELETE /api/comments/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `integer` | **Required**. Id of comment to delete |

## Tech Stack

**Client:** React, Redux Toolkit, TailwindCSS, Javascript

**Server:** Laravel, Php

**Database:** PostgreSql

## Maquette
https://www.figma.com/file/tm9AdGguBurigR85TO3SLd/SkillBoost?type=design&node-id=1%3A4505&mode=design&t=3aNgb32UP2HmKS4e-1
## Scrum Board

https://ayaelrhayour123.atlassian.net/jira/software/projects/SKIL/boards/8?atlOrigin=eyJpIjoiZjQzODliZjc2ZjBiNDYxZGI4ZmYyMDUwOTg1NTU2Y2IiLCJwIjoiaiJ9
## Cahier de charges

https://docs.google.com/document/d/1tRS56XYiezFpW4kTMPVhWl8pUO7uovndkAsD04rbq2g/edit?usp=sharing

## Support

For support, email ayaelrhayour123@gmail.com .
