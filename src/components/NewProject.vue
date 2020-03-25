<template>
  <div class="project-card rounded-border-5">
    <label for="project-name" class="input-field">
      <input type="text" id="project-name" placeholder="Project name" />
      <span class="input-border"></span>
    </label>

    <label for="project-description" class="input-field"
      ><textarea
        name="project-description"
        id="project-description"
        cols="25"
        rows="5"
        placeholder="Project description"
      ></textarea>
      <span class="input-border"></span
    ></label>

    <button class="btn btn-primary">Create</button>
  </div>
</template>
