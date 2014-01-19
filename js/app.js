// Generated by CoffeeScript 1.6.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(["jquery"], function($) {
    var App;
    return App = (function() {
      function App() {
        this._onModalClose = __bind(this._onModalClose, this);
        this._addListeners();
        console.log('Running...');
      }

      App.prototype._addListeners = function() {};

      App.prototype._onModalOpen = function() {
        return $('body').addClass('modal-open').append('<div class="overlay"></div>');
      };

      App.prototype._onModalClose = function() {
        $('.overlay').fadeOut(200, function() {
          return $(this).remove();
        });
        return $('body').removeClass('modal-open');
      };

      return App;

    })();
  });

}).call(this);

/*
//@ sourceMappingURL=app.map
*/