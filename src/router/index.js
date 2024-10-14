import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegressedSonDukeCptOneView from '@/views/chapters/regressed-son-duke/RegressedSonDukeCptOneView.vue'
import RegressedSonDukeView from '@/views/chapters/regressed-son-duke/RegressedSonDukeView.vue'
import LastAdventurerView from '@/views/chapters/last-adventurer/LastAdventurerView.vue'
import YourTalentIsMineView from '@/views/chapters/your-talent-is-mine/YourTalentIsMineView.vue'
import ReturnOfTheFrozenPlayerView from '@/views/chapters/return-of-the-frozen-player/ReturnOfTheFrozenPlayerView.vue'
import StarEmbracingSwordmaster from '@/views/chapters/star-embracing-swordmaster/StarEmbracingSwordmaster.vue'
import RegressedSonDukeCpttwoView from '@/views/chapters/regressed-son-duke/RegressedSonDukeCpttwoView.vue'
import LastAdventurerOneView from '@/views/chapters/last-adventurer/LastAdventurerOneView.vue'
import LastAdventurerTwoView from '@/views/chapters/last-adventurer/LastAdventurerTwoView.vue'
import YourTalentIsMineOneView from '@/views/chapters/your-talent-is-mine/YourTalentIsMineOneView.vue'
import YourTalentIsMineTwoView from '@/views/chapters/your-talent-is-mine/YourTalentIsMineTwoView.vue'
import ReturnOfTheFrozenPlayerOneView from '@/views/chapters/return-of-the-frozen-player/ReturnOfTheFrozenPlayerOneView.vue'
import ReturnOfTheFrozenPlayerTwoView from '@/views/chapters/return-of-the-frozen-player/ReturnOfTheFrozenPlayerTwoView.vue'
import StarEmbracingSwordmasterOneView from '@/views/chapters/star-embracing-swordmaster/StarEmbracingSwordmasterOneView.vue'
import StarEmbracingSwordmasterTwoView from '@/views/chapters/star-embracing-swordmaster/StarEmbracingSwordmasterTwoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/regressed-son-duke',
      name: 'regressed-son-duke',
      component: RegressedSonDukeView
    },
    {
      path: '/regressed-son-duke-cpt-1',
      name: 'regressed-son-duke-cpt-1',
      component: RegressedSonDukeCptOneView
    },
    {
      path: '/regressed-son-duke-cpt-2',
      name: 'regressed-son-duke-cpt-2',
      component: RegressedSonDukeCpttwoView
    },
    {
      path: '/last-adventurer',
      name: 'last-adventurer',
      component: LastAdventurerView
    },
    {
      path: '/last-adventurer-cpt-1',
      name: 'last-adventurer-cpt-1',
      component: LastAdventurerOneView
    },
    {
      path: '/last-adventurer-cpt-2',
      name: 'last-adventurer-cpt-2',
      component: LastAdventurerTwoView
    },
    {
      path: '/your-talent-mine',
      name: 'your-talent-mine',
      component: YourTalentIsMineView
    },
    {
      path: '/your-talent-mine-cpt-1',
      name: 'your-talent-mine-cpt-1',
      component: YourTalentIsMineOneView
    },
    {
      path: '/your-talent-mine-cpt-2',
      name: 'your-talent-mine-cpt-2',
      component: YourTalentIsMineTwoView
    },
    {
      path: '/return-of-the-frozen-player',
      name: 'return-of-the-frozen-player',
      component: ReturnOfTheFrozenPlayerView
    },
    {
      path: '/return-of-the-frozen-player-cpt-1',
      name: 'return-of-the-frozen-player-cpt-1',
      component: ReturnOfTheFrozenPlayerOneView
    },
    {
      path: '/return-of-the-frozen-player-cpt-2',
      name: 'return-of-the-frozen-player-cpt-2',
      component: ReturnOfTheFrozenPlayerTwoView
    },
    {
      path: '/star-embracing-swordmaster',
      name: 'star-embracing-swordmaster',
      component: StarEmbracingSwordmaster
    },
    {
      path: '/star-embracing-swordmaster-cpt-1',
      name: 'star-embracing-swordmaster-cpt-1',
      component: StarEmbracingSwordmasterOneView
    },
    {
      path: '/star-embracing-swordmaster-cpt-2',
      name: 'star-embracing-swordmaster-cpt-2',
      component: StarEmbracingSwordmasterTwoView
    }
  ]
})

export default router
