"use strict";
Object.defineProperties(exports, {
  Injector: {get: function() {
      return $__injector__.Injector;
    }},
  annotate: {get: function() {
      return $__annotations__.annotate;
    }},
  Inject: {get: function() {
      return $__annotations__.Inject;
    }},
  InjectLazy: {get: function() {
      return $__annotations__.InjectLazy;
    }},
  InjectPromise: {get: function() {
      return $__annotations__.InjectPromise;
    }},
  Provide: {get: function() {
      return $__annotations__.Provide;
    }},
  ProvidePromise: {get: function() {
      return $__annotations__.ProvidePromise;
    }},
  SuperConstructor: {get: function() {
      return $__annotations__.SuperConstructor;
    }},
  TransientScope: {get: function() {
      return $__annotations__.TransientScope;
    }},
  __esModule: {value: true}
});
var $__injector__,
    $__annotations__;
var $__injector__ = ($__injector__ = require("./injector"), $__injector__ && $__injector__.__esModule && $__injector__ || {default: $__injector__});
var $__annotations__ = ($__annotations__ = require("./annotations"), $__annotations__ && $__annotations__.__esModule && $__annotations__ || {default: $__annotations__});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvZGkvaW5kZXguanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNiIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci80IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzIiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci81IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7QUNGQSxLQUFLLGlCQUFpQixBQUFDLENBQUMsT0FBTTtVQ0E5QixFQUFDLEdBQUUsWUNBcUI7QUFBRSxtQ0FBd0I7SUFBRSxBREE5QixDQUFDO1VBQXZCLEVBQUMsR0FBRSxZQ0FxQjtBQUFFLHNDQUF3QjtJQUFFLEFEQTlCLENBQUM7UUFBdkIsRUFBQyxHQUFFLFlDQXFCO0FBQUUsb0NBQXdCO0lBQUUsQURBOUIsQ0FBQztZQUF2QixFQUFDLEdBQUUsWUNBcUI7QUFBRSx3Q0FBd0I7SUFBRSxBREE5QixDQUFDO2VBQXZCLEVBQUMsR0FBRSxZQ0FxQjtBQUFFLDJDQUF3QjtJQUFFLEFEQTlCLENBQUM7U0FBdkIsRUFBQyxHQUFFLFlDQXFCO0FBQUUscUNBQXdCO0lBQUUsQURBOUIsQ0FBQztnQkFBdkIsRUFBQyxHQUFFLFlDQXFCO0FBQUUsNENBQXdCO0lBQUUsQURBOUIsQ0FBQztrQkFBdkIsRUFBQyxHQUFFLFlDQXFCO0FBQUUsOENBQXdCO0lBQUUsQURBOUIsQ0FBQztnQkFBdkIsRUFBQyxHQUFFLFlDQXFCO0FBQUUsNENBQXdCO0lBQUUsQURBOUIsQ0FBQztBRUF2QixXQUFTLENDQVQsRUFBQyxLQUFJLENEQU8sS0FBRyxBQ0FTLENBQUM7Q0pBeUIsQ0FBQzs7O2tCS0FuRCxFQUFDLGVBQW9CLENBQUEsT0FBTSxBQUFDLGNBQWtCLENBQ3RDLENBQUEsZ0JBQXFCLHlCQUEyQixDQUFBLGdCQUFxQixHQUFLLEVBQUMsT0FBTSxlQUFtQixDQUQ5RCxBQUMrRCxDQUFDO3FCQUQ5RyxFQUFDLGtCQUFvQixDQUFBLE9BQU0sQUFBQyxpQkFBa0IsQ0FDdEMsQ0FBQSxtQkFBcUIsNEJBQTJCLENBQUEsbUJBQXFCLEdBQUssRUFBQyxPQUFNLGtCQUFtQixDQUQ5RCxBQUMrRCxDQUFDO0FOWTlHIiwiZmlsZSI6ImxpYnMvZGkvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vLi4iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQVUJMSUMgQVBJXG5cbmV4cG9ydCB7SW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuZXhwb3J0IHtcbiAgYW5ub3RhdGUsXG4gIEluamVjdCxcbiAgSW5qZWN0TGF6eSxcbiAgSW5qZWN0UHJvbWlzZSxcbiAgUHJvdmlkZSxcbiAgUHJvdmlkZVByb21pc2UsXG4gIFN1cGVyQ29uc3RydWN0b3IsXG4gIFRyYW5zaWVudFNjb3BlXG59IGZyb20gJy4vYW5ub3RhdGlvbnMnO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXhwb3J0cywgJF9fcGxhY2Vob2xkZXJfXzApOyIsIntnZXQ6ICRfX3BsYWNlaG9sZGVyX18wfSIsImdldCAkX19wbGFjZWhvbGRlcl9fMCgpIHsgcmV0dXJuICRfX3BsYWNlaG9sZGVyX18xOyB9IiwiX19lc01vZHVsZTogdHJ1ZSIsInt2YWx1ZTogJF9fcGxhY2Vob2xkZXJfXzB9IiwiKCRfX3BsYWNlaG9sZGVyX18wID0gcmVxdWlyZSgkX19wbGFjZWhvbGRlcl9fMSksIFxuICAgICAgICAkX19wbGFjZWhvbGRlcl9fMiAmJiAkX19wbGFjZWhvbGRlcl9fMy5fX2VzTW9kdWxlICYmICRfX3BsYWNlaG9sZGVyX180IHx8IHtkZWZhdWx0OiAkX19wbGFjZWhvbGRlcl9fNX0pIl19