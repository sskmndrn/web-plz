<template>
  <header style="background-color: white; display: flex; justify-content: center; align-items: center;">
    <div class="pages">
      <ul class="nav">
        <li class="nav-element">
          <NuxtLink to="/" class="nav-element-ref">
            <UIcon name="i-simple-icons-apple" class="size-22px"/>
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
          <NuxtLink to="/cart" class="nav-element-ref">
            <UIcon name="ion-bag-outline"/>
          </NuxtLink>
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

.nav {
  display: flex;
  align-items: center;
  height: 40px;
}

.nav-element {
  list-style: none;
  display: inline-block;
  padding-left: 7px;
  padding-right: 7px;
}

.nav-element-ref {
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.35s;
}

.nav-element-ref:hover {
  transform: scale(1.1);
}


</style>