- [x] Must separate the css and js from admin page and from blog page.
    - [x] Must call another page for admin and another page for blog
    - [x] This must be handled from laravel side
    - [x] This also will present the need to change the files that are generated on build
- [ ] Implement the setting api (Allow themes to register menu items and pages for theme properties)
    - [ ] Add a service that will make it easy to add a page to the main setting, this service should be called in the index.config
of the theme
    - [ ] This service will only be available if the theme has an admin section where it puts the settings

- [ ] Menu must be ordered by number.
    - [ ] You must leave some numbers from menu to menu to make it possible for themes and plugins to add
- [ ] Implement a settings API
    - [ ] Must have the ability to add a options group option name and must have a callback function that will handle the
    added data ('check if data format is how you want it ')

