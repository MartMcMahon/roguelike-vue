<script>

class BoardMaker {
	//method that takes height and width and returns a new baord
	
	//maintain a state of all boards we need

}

import { mapGetters } from 'vuex'

export default {
	computed: mapGetters({
		
	}),
	data() {
		return {
			maps: {}
		}
	},
	methods: {
		newBoard() {
			return [
				[
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
				],
				[
					{isOpen: false},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: false},
				],
				[
					{isOpen: false},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: false},
				],
				[
					{isOpen: false},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: false},
				],
				[
					{isOpen: false},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: false},
				],
				[
					{isOpen: false},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: false},
				],
				[
					{isOpen: false},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: false},
				],
				[
					{isOpen: false},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: true},
					{isOpen: false},
				],
				[
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
					{isOpen: false},
				],
			]
		}
	}
}
</script>