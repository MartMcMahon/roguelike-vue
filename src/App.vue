<template>
	<v-app dark>
		<v-toolbar>
			<v-toolbar-side-icon 
				@click.native="sideNav = !sideNav"
				class="hidden-sm-and-up"
			></v-toolbar-side-icon>
			<v-toolbar-title>
				<router-link to="/" tag="span" style="cursor: pointer">
					Welcome to App!
				</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-xs-only">
				<v-btn 
					flat 
					v-for="item in menuItems" :key="item.title"
					router
					:to="item.link">
					<v-icon left dark>{{ item.icon }}</v-icon>
					{{ item.title }}
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<v-navigation-drawer absolute temporary v-model="sideNav">
			<v-list>
				<v-list-tile key="home"
				router
				to="/">
					<v-list-tile-action>
						<v-icon>home</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						Welcome to App!
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile v-for="item in menuItems" :key="item.title"
				router
				:to="item.link">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						{{ item.title }}
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile>
					<subscribe-button />
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<main>
			<router-view></router-view>
		</main>
	</v-app>
</template>

<script>
import SubscribeButton from './components/subscribeButton'

export default {
	components: {
		'subscribe-button': SubscribeButton,
	},
	data() {
		return {
			sideNav: false,
			menuItems: [
				{ icon: 'room',
					title: 'map',
					link: '/map' },
				{ icon: 'room',
					title: 'menuItem2',
					link: '/meetup/new' },
				{ icon: 'person',
					title: 'profile',
					link: '/profile' },
				{ icon: 'face',
					title: 'sign up',
					link: '/signup' },
				{ icon: 'lock_open',
					title: 'sign in',
					link: '/login' },
				{ icon: 'face',
					title: 'logout',
					link: '/logout' },
			],
		}
	},
}
</script>
