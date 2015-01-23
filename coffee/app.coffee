class App

	constructor: ->

		console.log "Like what you see? Make me smile with a shout-out http://twitter.com/level_out"

		@_setupView()

	_setupView: ->

		@$logo = document.querySelector "#logo"

		@_addListeners()

	_addListeners: ->

		# @$logo.addEventListener "click", @_scrollTop
		if @$logo then window.onscroll = @_onScroll

		@_init()

	_init: ->

		# init app

	_onScroll: () =>

		if window.pageYOffset > 150
			@$logo.classList.add "scaled"
		else
			@$logo.classList.remove "scaled"

new App()
