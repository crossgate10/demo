<template>
    <div class="nav-main">
        <b-navbar class="pc-navigation-bar">
            <b-navbar-nav>
                <b-nav-item-dropdown text="中心簡介" id="menu-id-intro">
                    <b-dropdown-item to="/intro/brief" @click.native="addSubMenu($event)">簡介</b-dropdown-item>
                    <b-dropdown-item to="/intro/loc" @click.native="addSubMenu($event)">地理位置</b-dropdown-item>
                    <b-dropdown-item to="/intro/adoption" @click.native="addSubMenu($event)">實驗動物飼養認可設施</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="實驗動物照護及使用委員會" id="menu-id-iacuc">
                    <b-dropdown-item to="/iacuc/regulations" @click.native="addSubMenu($event)">設置辦法</b-dropdown-item>
                    <b-dropdown-item to="/iacuc/member" @click.native="addSubMenu($event)">成員名冊</b-dropdown-item>
                    <b-dropdown-item to="/iacuc/review" @click.native="addSubMenu($event)">審核流程</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="教育訓練" id="menu-id-training">
                    <b-dropdown-item to="/training/announcement" @click.native="addSubMenu($event)">近期公告</b-dropdown-item>
                    <b-dropdown-item to="/training/signup" @click.native="addSubMenu($event)">報名網頁</b-dropdown-item>
                    <b-dropdown-item to="/training/passlist" @click.native="addSubMenu($event)">歷屆通過名單</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item to="/bulletin" @click.prevent="resetSubMenu('公告資訊')">公告資訊</b-nav-item>

                <b-nav-item-dropdown text="下載專區" id="menu-id-download">
                    <b-dropdown-item to="/download/applyform" @click.native="addSubMenu($event)">申請表單</b-dropdown-item>
                    <b-dropdown-item to="/download/guide" @click.native="addSubMenu($event)">實驗動物照護指南</b-dropdown-item>
                    <b-dropdown-item to="/download/specs" @click.native="addSubMenu($event)">本校實驗動物飼養設施使用規範及相關表格</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item to="/links" @click.prevent="resetSubMenu('相關網站')">相關網站</b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <b-navbar class="mobile-navigation-bar" size="md" toggleable>
            <b-navbar-toggle class="collapse-toggle-div" target="nav-menu-collapse" left>
                <span class="navbar-toggler-icon"></span>
                <div class="school-name-div">國立高雄海洋科技大學 ＸＸＸＸＸＸ系</div>
            </b-navbar-toggle>

            <b-collapse id="nav-menu-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item-dropdown text="中心簡介" id="menu-id-intro">
                    <b-dropdown-item to="/intro/brief" @click.native="addSubMenu($event)">簡介</b-dropdown-item>
                    <b-dropdown-item to="/intro/loc" @click.native="addSubMenu($event)">地理位置</b-dropdown-item>
                    <b-dropdown-item to="/intro/adoption" @click.native="addSubMenu($event)">實驗動物飼養認可設施</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="實驗動物照護及使用委員會" id="menu-id-iacuc">
                    <b-dropdown-item to="/iacuc/regulations" @click.native="addSubMenu($event)">設置辦法</b-dropdown-item>
                    <b-dropdown-item to="/iacuc/member" @click.native="addSubMenu($event)">成員名冊</b-dropdown-item>
                    <b-dropdown-item to="/iacuc/review" @click.native="addSubMenu($event)">審核流程</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="教育訓練" id="menu-id-training">
                    <b-dropdown-item to="/training/announcement" @click.native="addSubMenu($event)">近期公告</b-dropdown-item>
                    <b-dropdown-item to="/training/signup" @click.native="addSubMenu($event)">報名網頁</b-dropdown-item>
                    <b-dropdown-item to="/training/passlist" @click.native="addSubMenu($event)">歷屆通過名單</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item to="/bulletin" @click.prevent="resetSubMenu('公告資訊')">公告資訊</b-nav-item>

                <b-nav-item-dropdown text="下載專區" id="menu-id-download">
                    <b-dropdown-item to="/download/applyform" @click.native="addSubMenu($event)">申請表單</b-dropdown-item>
                    <b-dropdown-item to="/download/guide" @click.native="addSubMenu($event)">實驗動物照護指南</b-dropdown-item>
                    <b-dropdown-item to="/download/specs" @click.native="addSubMenu($event)">本校實驗動物飼養設施使用規範及相關表格</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item to="/links" @click.prevent="resetSubMenu('相關網站')">相關網站</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  data() {
      return {
          hover: true
      }
  },
  mounted() {
    //   this.$root.$emit('bv::toggle::collapse', 'nav-menu-collapse')

    // this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
    //   console.log('collapseId:', collapseId)
    //   console.log('isJustShown:', isJustShown)
    // })
  },
  methods: {
      addSubMenu(e) {
        var menuName = e.target.parentElement.parentElement.parentElement.id;
        var subMenuLinks = document.getElementById(menuName).children[1].cloneNode(true);
        var subMenu = document.getElementById('sub-menu');
        Array.prototype.forEach.call(subMenuLinks.children, child => {
            child.children[0].classList.remove("dropdown-item");
        });
        subMenu.innerHTML = subMenuLinks.innerHTML
      },
      resetSubMenu(name) {
          var subMenu = document.getElementById('sub-menu');
          subMenu.innerHTML = "<p>"+name+"</p>";
      }
  }
}
</script>

<style scoped>
.nav-main {
    width: 100%;
    display: grid;
    justify-content: center;
}

@media screen and (max-width: 320px) {
    .pc-navigation-bar {
        display: none;
    }

    .navbar-toggler {
        display: flex;
    }

    .school-name-div {
        white-space: normal;
        font-size: 0.9rem;
    }

    .dropdown li {
        text-align: center;
    }
}

@media screen and (min-width: 321px) and (max-width: 420px) {
    .pc-navigation-bar {
        display: none;
    }

    .navbar-toggler {
        display: contents;
    }

    .school-name-div {
        white-space: normal;
        margin-right: 15%;
        font-size: 0.9rem;
    }

    .dropdown li {
        text-align: center;
    }
}

@media screen and (min-width: 421px) {
    .mobile-navigation-bar {
        display: none;
    }

    .school-name-div {
        display: none;
    }
}

</style>

