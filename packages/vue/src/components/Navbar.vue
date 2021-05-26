<template>
  <nav class="nav">
    <ul class="nav__links">
      <li class="link">
        <router-link to="/">
          <div class="link__wrapper">
            <span class="sr-only">active todos</span>
            <CalendarIcon />
          </div>
        </router-link>
      </li>
      <li class="link">
        <router-link to="/done">
          <div class="link__wrapper">
            <span class="sr-only">done todos</span>
            <ListIcon />
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import ListIcon from "../assets/icons/list.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
export default {
  components: {
    ListIcon,
    CalendarIcon,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__links {
    list-style-type: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;

    .link {
      width: 50%;
      &__wrapper {
        text-align: center;
        background-color: #f0eee9;
        color: gray;
        padding: 20px 70px;
        font-size: 1.6em;
        cursor: pointer;
        border-radius: 20px 20px 0 0;

        svg {
          transform: translateY(5px);
        }
      }

      .router-link-exact-active .link__wrapper {
        background-color: #fff;
        cursor: default;

        svg path {
          fill: #9e73c8;
        }
      }
    }
  }
}
</style>
