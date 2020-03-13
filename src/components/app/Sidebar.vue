<template>
  <ul class="sidenav app-sidenav open">
    <router-link
      tag="li"
      active-class="active"
      to="/"
      exact
    >
      <a class="waves-effect waves-orange pointer" href="#">Счет</a>
    </router-link>
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
</template>

<script>
export default {
  data: () => ({
    link: [
      { title: 'Счет', url: '/' },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: 'record' },
      { title: 'Категории', url: '/categories' }
    ]
  })
}
</script>
