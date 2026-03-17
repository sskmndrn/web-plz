<template>
  <header>
    <div class="pages">
      <ul class="nav">
        <li class="nav-element">
          <NuxtLink to="/" class="nav-element-ref">
            <img src="c:\Users\User\Desktop\web-plz\nuxt-app\public\apple-logo.png" alt="logo Apple" width="16px"
              class="logo-apple">
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            Store
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            Mac
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/iPad" class="nav-element-ref">
            iPad
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/iPhone" class="nav-element-ref">
            iPhone
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            Watch
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            Vision
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            AirPods
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            TV & Home
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            Entertaiment
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            Accessories
          </NuxtLink>
        </li>
        <li class="nav-element">
          <NuxtLink to="/macbook" class="nav-element-ref">
            Support
          </NuxtLink>
        </li>
        <li class="nav-element">
          <img src="C:\Users\User\Desktop\web-plz\nuxt-app\public\icons\icons8-тележка-для-покупок-30.png"
            alt="shoping cart" width="16px">
        </li>
        <li class="nav-element">
          <UButton color="primary" loading>Button</UButton>
        </li>
      </ul>

    </div>
  </header>
</template>

<style>
.pages {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-element {
  list-style: none;
  display: inline;
  padding-left: 5px;
  padding-right: 5px;
}

.nav-element-ref {
  text-decoration: none;
  color: black;
}

.logo-apple {
  padding-top: 0px;
  transition: 0.35s;
}

.logo-apple:hover {
  transform: scale(1.1);
}
</style>