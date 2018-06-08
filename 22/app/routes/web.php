<?php


Route::get('projects/create', 'ProjectsController@create');

Route::post('projects', 'ProjectsController@store');
