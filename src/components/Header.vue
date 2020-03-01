<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="{ name: 'home' }" class="header__link">
        <img
          src="../assets/hyewonshin.jpg"
          alt="Hyewon Shin"
          titl="Hyewon Shin Portfolio"
        />
      </router-link>
    </div>
    <ul class="header__menu">
      <li class="header__list">
        <router-link
          :to="{ name: 'home' }"
          activeClassName="header__link--active"
          class="header__link"
        >
          Work
        </router-link>
      </li>
      <li class="header__list">
        <router-link
          :to="{ name: 'about' }"
          activeClassName="header__link--active"
          class="header__link"
        >
          About
        </router-link>
      </li>
      <li class="header__list">
        <router-link
          :to="{ name: 'contact' }"
          activeClassName="header__link--active"
          class="header__link"
        >
          Contact
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  max-width: 968px;
  margin: 50px auto 10px auto;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;

  &__logo {
    text-align: left;

    img {
      max-width: 250px;
      height: auto;
    }
  }

  &__menu {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: right;
    align-self: center;
  }

  &__list {
    display: inline-block;
    padding: 0 20px;
    width: 100%;

    @media screen and (min-width: 768px) {
      width: auto;
    }
  }

  &__link {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    color: #262626;
    text-decoration: none;

    &--active,
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
