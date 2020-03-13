<template>
  <div class="app-main-layout">
    <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
              class="dropdown-trigger black-text"
              data-target="dropdown"
              href="#"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul class='dropdown-content' id='dropdown'>
              <li>
                <a class="black-text" href="#">
                  <i class="material-icons">account_circle</i>Профиль
                </a>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a class="black-text" href="#">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav app-sidenav open">
      <li>
        <a class="waves-effect waves-orange pointer" href="#">Счет</a>
      </li>
      <li>
        <a class="waves-effect waves-orange pointer" href="#">История</a>
      </li>
      <li>
        <a class="waves-effect waves-orange pointer" href="#">Планирование</a>
      </li>
      <li>
        <a class="waves-effect waves-orange pointer" href="#">Новая запись</a>
      </li>
      <li>
        <a class="waves-effect waves-orange pointer" href="#">Категории</a>
      </li>
    </ul>

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>
