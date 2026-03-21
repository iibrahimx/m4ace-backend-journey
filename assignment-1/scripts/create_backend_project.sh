#!/usr/bin/env bash

PROJECT_NAME=$1

mkdir -p "$PROJECT_NAME"/src/{controllers,routes,models,middleware}
mkdir "$PROJECT_NAME"/tests
touch "$PROJECT_NAME"/README.md

echo "Project $PROJECT_NAME created successfully"
