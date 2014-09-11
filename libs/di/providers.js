"use strict";
Object.defineProperties(exports, {
  createProviderFromFnOrClass: {get: function() {
      return createProviderFromFnOrClass;
    }},
  __esModule: {value: true}
});
var $__annotations__,
    $__util__;
var $__0 = ($__annotations__ = require("./annotations"), $__annotations__ && $__annotations__.__esModule && $__annotations__ || {default: $__annotations__}),
    SuperConstructorAnnotation = $__0.SuperConstructor,
    readAnnotations = $__0.readAnnotations;
var $__1 = ($__util__ = require("./util"), $__util__ && $__util__.__esModule && $__util__ || {default: $__util__}),
    isClass = $__1.isClass,
    isFunction = $__1.isFunction,
    isObject = $__1.isObject,
    toString = $__1.toString;
var EmptyFunction = Object.getPrototypeOf(Function);
var ClassProvider = function ClassProvider(clazz, params, isPromise) {
  this.provider = clazz;
  this.isPromise = isPromise;
  this.params = [];
  this._constructors = [];
  this._flattenParams(clazz, params);
  this._constructors.unshift([clazz, 0, this.params.length - 1]);
};
($traceurRuntime.createClass)(ClassProvider, {
  _flattenParams: function(constructor, params) {
    var SuperConstructor;
    var constructorInfo;
    for (var $__3 = params[Symbol.iterator](),
        $__4; !($__4 = $__3.next()).done; ) {
      var param = $__4.value;
      {
        if (param.token === SuperConstructorAnnotation) {
          SuperConstructor = Object.getPrototypeOf(constructor);
          if (SuperConstructor === EmptyFunction) {
            throw new Error((toString(constructor) + " does not have a parent constructor. Only classes with a parent can ask for SuperConstructor!"));
          }
          constructorInfo = [SuperConstructor, this.params.length];
          this._constructors.push(constructorInfo);
          this._flattenParams(SuperConstructor, readAnnotations(SuperConstructor).params);
          constructorInfo.push(this.params.length - 1);
        } else {
          this.params.push(param);
        }
      }
    }
  },
  _createConstructor: function(currentConstructorIdx, context, allArguments) {
    var constructorInfo = this._constructors[currentConstructorIdx];
    var nextConstructorInfo = this._constructors[currentConstructorIdx + 1];
    var argsForCurrentConstructor;
    if (nextConstructorInfo) {
      argsForCurrentConstructor = allArguments.slice(constructorInfo[1], nextConstructorInfo[1]).concat([this._createConstructor(currentConstructorIdx + 1, context, allArguments)]).concat(allArguments.slice(nextConstructorInfo[2] + 1, constructorInfo[2] + 1));
    } else {
      argsForCurrentConstructor = allArguments.slice(constructorInfo[1], constructorInfo[2] + 1);
    }
    return function InjectedAndBoundSuperConstructor() {
      return constructorInfo[0].apply(context, argsForCurrentConstructor);
    };
  },
  create: function(args) {
    var context = Object.create(this.provider.prototype);
    var constructor = this._createConstructor(0, context, args);
    var returnedValue = constructor();
    if (isFunction(returnedValue) || isObject(returnedValue)) {
      return returnedValue;
    }
    return context;
  }
}, {});
var FactoryProvider = function FactoryProvider(factoryFunction, params, isPromise) {
  this.provider = factoryFunction;
  this.params = params;
  this.isPromise = isPromise;
  for (var $__3 = params[Symbol.iterator](),
      $__4; !($__4 = $__3.next()).done; ) {
    var param = $__4.value;
    {
      if (param.token === SuperConstructorAnnotation) {
        throw new Error((toString(factoryFunction) + " is not a class. Only classes with a parent can ask for SuperConstructor!"));
      }
    }
  }
};
($traceurRuntime.createClass)(FactoryProvider, {create: function(args) {
    return this.provider.apply(undefined, args);
  }}, {});
function createProviderFromFnOrClass(fnOrClass, annotations) {
  if (isClass(fnOrClass)) {
    return new ClassProvider(fnOrClass, annotations.params, annotations.provide.isPromise);
  }
  return new FactoryProvider(fnOrClass, annotations.params, annotations.provide.isPromise);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvZGkvcHJvdmlkZXJzLmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8yIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzgiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLEtBQUssaUJBQWlCLEFBQUMsQ0FBQyxPQUFNOzZCQ0E5QixFQUFDLEdBQUUsWUNBcUI7QUFBRSx3Q0FBd0I7SUFBRSxBREE5QixDQUFDO0FFQXZCLFdBQVMsQ0NBVCxFQUFDLEtBQUksQ0RBTyxLQUFHLEFDQVMsQ0FBQztDSkF5QixDQUFDOzs7U0tBbkQsRUFBQyxrQkFBb0IsQ0FBQSxPQUFNLEFBQUMsaUJBQWtCLENBQ3RDLENBQUEsbUJBQXFCLDRCQUEyQixDQUFBLG1CQUFxQixHQUFLLEVBQUMsT0FBTSxrQkFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztBTkRsRiw2QkFBeUI7QUFBRyxrQkFBYztTTUF0RSxFQUFDLFdBQW9CLENBQUEsT0FBTSxBQUFDLFVBQWtCLENBQ3RDLENBQUEsWUFBcUIscUJBQTJCLENBQUEsWUFBcUIsR0FBSyxFQUFDLE9BQU0sV0FBbUIsQ0FEOUQsQUFDK0QsQ0FBQztBTkF0RyxVQUFNO0FBQUcsYUFBUztBQUFHLFdBQU87QUFBRyxXQUFPO0FBZ0I5QyxBQUFJLEVBQUEsQ0FBQSxhQUFZLEVBQUksQ0FBQSxNQUFLLGVBQWUsQUFBQyxDQUFDLFFBQU8sQ0FBQyxDQUFDO0FPakJuRCxBQUFJLEVBQUEsZ0JQNEJKLFNBQU0sY0FBWSxDQUNKLEtBQUksQ0FBRyxDQUFBLE1BQUssQ0FBRyxDQUFBLFNBQVEsQ0FBRztBQUVwQyxLQUFHLFNBQVMsRUFBSSxNQUFJLENBQUM7QUFDckIsS0FBRyxVQUFVLEVBQUksVUFBUSxDQUFDO0FBRTFCLEtBQUcsT0FBTyxFQUFJLEdBQUMsQ0FBQztBQUNoQixLQUFHLGNBQWMsRUFBSSxHQUFDLENBQUM7QUFFdkIsS0FBRyxlQUFlLEFBQUMsQ0FBQyxLQUFJLENBQUcsT0FBSyxDQUFDLENBQUM7QUFDbEMsS0FBRyxjQUFjLFFBQVEsQUFBQyxDQUFDLENBQUMsS0FBSSxDQUFHLEVBQUEsQ0FBRyxDQUFBLElBQUcsT0FBTyxPQUFPLEVBQUksRUFBQSxDQUFDLENBQUMsQ0FBQztBT3RDMUIsQVB1Q3RDLENPdkNzQztBQ0F4QyxBQUFDLGVBQWMsWUFBWSxDQUFDLEFBQUM7QVJnRDNCLGVBQWEsQ0FBYixVQUFlLFdBQVUsQ0FBRyxDQUFBLE1BQUs7QUFDL0IsQUFBSSxNQUFBLENBQUEsZ0JBQWUsQ0FBQztBQUNwQixBQUFJLE1BQUEsQ0FBQSxlQUFjLENBQUM7QVNqRGYsUUFBUyxHQUFBLE9BQ0EsQ1RrREssTUFBSyxDU2xEUSxNQUFLLFNBQVMsQ0FBQyxBQUFDLEVBQUM7QUFDbkMsV0FBZ0IsQ0FDcEIsRUFBQyxDQUFDLE1BQW9CLENBQUEsU0FBcUIsQUFBQyxFQUFDLENBQUMsS0FBSyxHQUFLO1FUZ0R4RCxNQUFJO0FBQWE7QUFDeEIsV0FBSSxLQUFJLE1BQU0sSUFBTSwyQkFBeUIsQ0FBRztBQUM5Qyx5QkFBZSxFQUFJLENBQUEsTUFBSyxlQUFlLEFBQUMsQ0FBQyxXQUFVLENBQUMsQ0FBQztBQUVyRCxhQUFJLGdCQUFlLElBQU0sY0FBWSxDQUFHO0FBQ3RDLGdCQUFNLElBQUksTUFBSSxBQUFDLEVBQUksUUFBTyxBQUFDLENBQUMsV0FBVSxDQUFDLENBQUEsQ0FBQyxnR0FBOEYsRUFBQyxDQUFDO1VBQzFJO0FBQUEsQUFFQSx3QkFBYyxFQUFJLEVBQUMsZ0JBQWUsQ0FBRyxDQUFBLElBQUcsT0FBTyxPQUFPLENBQUMsQ0FBQztBQUN4RCxhQUFHLGNBQWMsS0FBSyxBQUFDLENBQUMsZUFBYyxDQUFDLENBQUM7QUFDeEMsYUFBRyxlQUFlLEFBQUMsQ0FBQyxnQkFBZSxDQUFHLENBQUEsZUFBYyxBQUFDLENBQUMsZ0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvRSx3QkFBYyxLQUFLLEFBQUMsQ0FBQyxJQUFHLE9BQU8sT0FBTyxFQUFJLEVBQUEsQ0FBQyxDQUFDO1FBQzlDLEtBQU87QUFDTCxhQUFHLE9BQU8sS0FBSyxBQUFDLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDekI7QUFBQSxNQUNGO0lTNURJO0FBQUEsRVQ2RE47QUFLQSxtQkFBaUIsQ0FBakIsVUFBbUIscUJBQW9CLENBQUcsQ0FBQSxPQUFNLENBQUcsQ0FBQSxZQUFXLENBQUc7QUFDL0QsQUFBSSxNQUFBLENBQUEsZUFBYyxFQUFJLENBQUEsSUFBRyxjQUFjLENBQUUscUJBQW9CLENBQUMsQ0FBQztBQUMvRCxBQUFJLE1BQUEsQ0FBQSxtQkFBa0IsRUFBSSxDQUFBLElBQUcsY0FBYyxDQUFFLHFCQUFvQixFQUFJLEVBQUEsQ0FBQyxDQUFDO0FBQ3ZFLEFBQUksTUFBQSxDQUFBLHlCQUF3QixDQUFDO0FBRTdCLE9BQUksbUJBQWtCLENBQUc7QUFDdkIsOEJBQXdCLEVBQUksQ0FBQSxZQUFXLE1BQzlCLEFBQUMsQ0FBQyxlQUFjLENBQUUsQ0FBQSxDQUFDLENBQUcsQ0FBQSxtQkFBa0IsQ0FBRSxDQUFBLENBQUMsQ0FBQyxPQUMzQyxBQUFDLENBQUMsQ0FBQyxJQUFHLG1CQUFtQixBQUFDLENBQUMscUJBQW9CLEVBQUksRUFBQSxDQUFHLFFBQU0sQ0FBRyxhQUFXLENBQUMsQ0FBQyxDQUFDLE9BQzdFLEFBQUMsQ0FBQyxZQUFXLE1BQU0sQUFBQyxDQUFDLG1CQUFrQixDQUFFLENBQUEsQ0FBQyxFQUFJLEVBQUEsQ0FBRyxDQUFBLGVBQWMsQ0FBRSxDQUFBLENBQUMsRUFBSSxFQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLEtBQU87QUFDTCw4QkFBd0IsRUFBSSxDQUFBLFlBQVcsTUFBTSxBQUFDLENBQUMsZUFBYyxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsZUFBYyxDQUFFLENBQUEsQ0FBQyxFQUFJLEVBQUEsQ0FBQyxDQUFDO0lBQzVGO0FBQUEsQUFFQSxTQUFPLFNBQVMsaUNBQStCLENBQUMsQUFBQyxDQUFFO0FBRWpELFdBQU8sQ0FBQSxlQUFjLENBQUUsQ0FBQSxDQUFDLE1BQU0sQUFBQyxDQUFDLE9BQU0sQ0FBRywwQkFBd0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7RUFDSDtBQUdBLE9BQUssQ0FBTCxVQUFPLElBQUcsQ0FBRztBQUNYLEFBQUksTUFBQSxDQUFBLE9BQU0sRUFBSSxDQUFBLE1BQUssT0FBTyxBQUFDLENBQUMsSUFBRyxTQUFTLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELEFBQUksTUFBQSxDQUFBLFdBQVUsRUFBSSxDQUFBLElBQUcsbUJBQW1CLEFBQUMsQ0FBQyxDQUFBLENBQUcsUUFBTSxDQUFHLEtBQUcsQ0FBQyxDQUFDO0FBQzNELEFBQUksTUFBQSxDQUFBLGFBQVksRUFBSSxDQUFBLFdBQVUsQUFBQyxFQUFDLENBQUM7QUFFakMsT0FBSSxVQUFTLEFBQUMsQ0FBQyxhQUFZLENBQUMsQ0FBQSxFQUFLLENBQUEsUUFBTyxBQUFDLENBQUMsYUFBWSxDQUFDLENBQUc7QUFDeEQsV0FBTyxjQUFZLENBQUM7SUFDdEI7QUFBQSxBQUVBLFNBQU8sUUFBTSxDQUFDO0VBQ2hCO0FBQUEsS1F4R21GO0FEQXJGLEFBQUksRUFBQSxrQlA4R0osU0FBTSxnQkFBYyxDQUNOLGVBQWMsQ0FBRyxDQUFBLE1BQUssQ0FBRyxDQUFBLFNBQVE7QUFDM0MsS0FBRyxTQUFTLEVBQUksZ0JBQWMsQ0FBQztBQUMvQixLQUFHLE9BQU8sRUFBSSxPQUFLLENBQUM7QUFDcEIsS0FBRyxVQUFVLEVBQUksVUFBUSxDQUFDO0FTakh0QixNQUFTLEdBQUEsT0FDQSxDVGtISyxNQUFLLENTbEhRLE1BQUssU0FBUyxDQUFDLEFBQUMsRUFBQztBQUNuQyxTQUFnQixDQUNwQixFQUFDLENBQUMsTUFBb0IsQ0FBQSxTQUFxQixBQUFDLEVBQUMsQ0FBQyxLQUFLLEdBQUs7TVRnSHhELE1BQUk7QUFBYTtBQUN4QixTQUFJLEtBQUksTUFBTSxJQUFNLDJCQUF5QixDQUFHO0FBQzlDLFlBQU0sSUFBSSxNQUFJLEFBQUMsRUFBSSxRQUFPLEFBQUMsQ0FBQyxlQUFjLENBQUMsQ0FBQSxDQUFDLDRFQUEwRSxFQUFDLENBQUM7TUFDMUg7QUFBQSxJQUNGO0VTakhJO0FBQUEsQUZQZ0MsQVA4SHhDLENPOUh3QztBQ0F4QyxBQUFDLGVBQWMsWUFBWSxDQUFDLEFBQUMsbUJSMkgzQixNQUFLLENBQUwsVUFBTyxJQUFHLENBQUc7QUFDWCxTQUFPLENBQUEsSUFBRyxTQUFTLE1BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBRyxLQUFHLENBQUMsQ0FBQztFQUM3QyxNUTdIbUY7QVJpSTlFLE9BQVMsNEJBQTBCLENBQUUsU0FBUSxDQUFHLENBQUEsV0FBVSxDQUFHO0FBQ2xFLEtBQUksT0FBTSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUc7QUFDdEIsU0FBTyxJQUFJLGNBQVksQUFBQyxDQUFDLFNBQVEsQ0FBRyxDQUFBLFdBQVUsT0FBTyxDQUFHLENBQUEsV0FBVSxRQUFRLFVBQVUsQ0FBQyxDQUFDO0VBQ3hGO0FBQUEsQUFFQSxPQUFPLElBQUksZ0JBQWMsQUFBQyxDQUFDLFNBQVEsQ0FBRyxDQUFBLFdBQVUsT0FBTyxDQUFHLENBQUEsV0FBVSxRQUFRLFVBQVUsQ0FBQyxDQUFDO0FBQzFGO0FBQUEiLCJmaWxlIjoibGlicy9kaS9wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1cGVyQ29uc3RydWN0b3IgYXMgU3VwZXJDb25zdHJ1Y3RvckFubm90YXRpb24sIHJlYWRBbm5vdGF0aW9uc30gZnJvbSAnLi9hbm5vdGF0aW9ucyc7XG5pbXBvcnQge2lzQ2xhc3MsIGlzRnVuY3Rpb24sIGlzT2JqZWN0LCB0b1N0cmluZ30gZnJvbSAnLi91dGlsJztcblxuXG4vLyBQcm92aWRlciBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgaW5zdGFuY2VzLlxuLy9cbi8vIHJlc3BvbnNpYmlsaXRpZXM6XG4vLyAtIGNyZWF0ZSBpbnN0YW5jZXNcbi8vXG4vLyBjb21tdW5pY2F0aW9uOlxuLy8gLSBleHBvc2VzIGBjcmVhdGUoKWAgd2hpY2ggY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBzb21ldGhpbmdcbi8vIC0gZXhwb3NlcyBgcGFyYW1zYCAoaW5mb3JtYXRpb24gYWJvdXQgd2hpY2ggYXJndW1lbnRzIGl0IHJlcXVpcmVzIHRvIGJlIHBhc3NlZCBpbnRvIGBjcmVhdGUoKWApXG4vL1xuLy8gSW5qZWN0b3IgcmVhZHMgYHByb3ZpZGVyLnBhcmFtc2AgZmlyc3QsIGNyZWF0ZSB0aGVzZSBkZXBlbmRlbmNpZXMgKGhvd2V2ZXIgaXQgd2FudHMpLFxuLy8gdGhlbiBjYWxscyBgcHJvdmlkZXIuY3JlYXRlKGFyZ3MpYCwgcGFzc2luZyBpbiB0aGVzZSBhcmd1bWVudHMuXG5cblxudmFyIEVtcHR5RnVuY3Rpb24gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRnVuY3Rpb24pO1xuXG5cbi8vIENsYXNzUHJvdmlkZXIga25vd3MgaG93IHRvIGluc3RhbnRpYXRlIGNsYXNzZXMuXG4vL1xuLy8gSWYgYSBjbGFzcyBpbmhlcml0cyAoaGFzIHBhcmVudCBjb25zdHJ1Y3RvcnMpLCB0aGlzIHByb3ZpZGVyIG5vcm1hbGl6ZXMgYWxsIHRoZSBkZXBlbmRlbmNpZXNcbi8vIGludG8gYSBzaW5nbGUgZmxhdCBhcnJheSBmaXJzdCwgc28gdGhhdCB0aGUgaW5qZWN0b3IgZG9lcyBub3QgbmVlZCB0byB3b3JyeSBhYm91dCBpbmhlcml0YW5jZS5cbi8vXG4vLyAtIGFsbCB0aGUgc3RhdGUgaXMgaW1tdXRhYmxlIChjb25zdHJ1Y3RlZClcbi8vXG4vLyBUT0RPKHZvanRhKTogc3VwZXIgY29uc3RydWN0b3IgLSBzaG91bGQgYmUgb25seSBhbGxvd2VkIGR1cmluZyB0aGUgY29uc3RydWN0b3IgY2FsbD9cbmNsYXNzIENsYXNzUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihjbGF6eiwgcGFyYW1zLCBpc1Byb21pc2UpIHtcbiAgICAvLyBUT0RPKHZvanRhKTogY2FuIHdlIGhpZGUgdGhpcy5wcm92aWRlcj8gKG9ubHkgdXNlZCBmb3IgaGFzQW5ub3RhdGlvbihwcm92aWRlci5wcm92aWRlcikpXG4gICAgdGhpcy5wcm92aWRlciA9IGNsYXp6O1xuICAgIHRoaXMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuXG4gICAgdGhpcy5wYXJhbXMgPSBbXTtcbiAgICB0aGlzLl9jb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuX2ZsYXR0ZW5QYXJhbXMoY2xhenosIHBhcmFtcyk7XG4gICAgdGhpcy5fY29uc3RydWN0b3JzLnVuc2hpZnQoW2NsYXp6LCAwLCB0aGlzLnBhcmFtcy5sZW5ndGggLSAxXSk7XG4gIH1cblxuICAvLyBOb3JtYWxpemUgcGFyYW1zIGZvciBhbGwgdGhlIGNvbnN0cnVjdG9ycyAoaW4gdGhlIGNhc2Ugb2YgaW5oZXJpdGFuY2UpLFxuICAvLyBpbnRvIGEgc2luZ2xlIGZsYXQgYXJyYXkgb2YgRGVwZW5kZW5jeURlc2NyaXB0b3JzLlxuICAvLyBTbyB0aGF0IHRoZSBpbmplY3RvciBkb2VzIG5vdCBoYXZlIHRvIHdvcnJ5IGFib3V0IGluaGVyaXRhbmNlLlxuICAvL1xuICAvLyBUaGlzIGZ1bmN0aW9uIG11dGF0ZXMgYHRoaXMucGFyYW1zYCBhbmQgYHRoaXMuX2NvbnN0cnVjdG9yc2AsXG4gIC8vIGJ1dCBpdCBpcyBvbmx5IGNhbGxlZCBkdXJpbmcgdGhlIGNvbnN0cnVjdG9yLlxuICAvLyBUT0RPKHZvanRhKTogcmVtb3ZlIHRoZSBhbm5vdGF0aW9ucyBhcmd1bWVudD9cbiAgX2ZsYXR0ZW5QYXJhbXMoY29uc3RydWN0b3IsIHBhcmFtcykge1xuICAgIHZhciBTdXBlckNvbnN0cnVjdG9yO1xuICAgIHZhciBjb25zdHJ1Y3RvckluZm87XG5cbiAgICBmb3IgKHZhciBwYXJhbSBvZiBwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbS50b2tlbiA9PT0gU3VwZXJDb25zdHJ1Y3RvckFubm90YXRpb24pIHtcbiAgICAgICAgU3VwZXJDb25zdHJ1Y3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgaWYgKFN1cGVyQ29uc3RydWN0b3IgPT09IEVtcHR5RnVuY3Rpb24pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dG9TdHJpbmcoY29uc3RydWN0b3IpfSBkb2VzIG5vdCBoYXZlIGEgcGFyZW50IGNvbnN0cnVjdG9yLiBPbmx5IGNsYXNzZXMgd2l0aCBhIHBhcmVudCBjYW4gYXNrIGZvciBTdXBlckNvbnN0cnVjdG9yIWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3JJbmZvID0gW1N1cGVyQ29uc3RydWN0b3IsIHRoaXMucGFyYW1zLmxlbmd0aF07XG4gICAgICAgIHRoaXMuX2NvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9ySW5mbyk7XG4gICAgICAgIHRoaXMuX2ZsYXR0ZW5QYXJhbXMoU3VwZXJDb25zdHJ1Y3RvciwgcmVhZEFubm90YXRpb25zKFN1cGVyQ29uc3RydWN0b3IpLnBhcmFtcyk7XG4gICAgICAgIGNvbnN0cnVjdG9ySW5mby5wdXNoKHRoaXMucGFyYW1zLmxlbmd0aCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJhbXMucHVzaChwYXJhbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQmFzaWNhbGx5IHRoZSByZXZlcnNlIHByb2Nlc3MgdG8gYHRoaXMuX2ZsYXR0ZW5QYXJhbXNgOlxuICAvLyBXZSBnZXQgYXJndW1lbnRzIGZvciBhbGwgdGhlIGNvbnN0cnVjdG9ycyBhcyBhIHNpbmdsZSBmbGF0IGFycmF5LlxuICAvLyBUaGlzIG1ldGhvZCBnZW5lcmF0ZXMgcHJlLWJvdW5kIFwic3VwZXJDb25zdHJ1Y3RvclwiIHdyYXBwZXIgd2l0aCBjb3JyZWN0bHkgcGFzc2luZyBhcmd1bWVudHMuXG4gIF9jcmVhdGVDb25zdHJ1Y3RvcihjdXJyZW50Q29uc3RydWN0b3JJZHgsIGNvbnRleHQsIGFsbEFyZ3VtZW50cykge1xuICAgIHZhciBjb25zdHJ1Y3RvckluZm8gPSB0aGlzLl9jb25zdHJ1Y3RvcnNbY3VycmVudENvbnN0cnVjdG9ySWR4XTtcbiAgICB2YXIgbmV4dENvbnN0cnVjdG9ySW5mbyA9IHRoaXMuX2NvbnN0cnVjdG9yc1tjdXJyZW50Q29uc3RydWN0b3JJZHggKyAxXTtcbiAgICB2YXIgYXJnc0ZvckN1cnJlbnRDb25zdHJ1Y3RvcjtcblxuICAgIGlmIChuZXh0Q29uc3RydWN0b3JJbmZvKSB7XG4gICAgICBhcmdzRm9yQ3VycmVudENvbnN0cnVjdG9yID0gYWxsQXJndW1lbnRzXG4gICAgICAgICAgLnNsaWNlKGNvbnN0cnVjdG9ySW5mb1sxXSwgbmV4dENvbnN0cnVjdG9ySW5mb1sxXSlcbiAgICAgICAgICAuY29uY2F0KFt0aGlzLl9jcmVhdGVDb25zdHJ1Y3RvcihjdXJyZW50Q29uc3RydWN0b3JJZHggKyAxLCBjb250ZXh0LCBhbGxBcmd1bWVudHMpXSlcbiAgICAgICAgICAuY29uY2F0KGFsbEFyZ3VtZW50cy5zbGljZShuZXh0Q29uc3RydWN0b3JJbmZvWzJdICsgMSwgY29uc3RydWN0b3JJbmZvWzJdICsgMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzRm9yQ3VycmVudENvbnN0cnVjdG9yID0gYWxsQXJndW1lbnRzLnNsaWNlKGNvbnN0cnVjdG9ySW5mb1sxXSwgY29uc3RydWN0b3JJbmZvWzJdICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIEluamVjdGVkQW5kQm91bmRTdXBlckNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gVE9ETyh2b2p0YSk6IHRocm93IGlmIGFyZ3VtZW50cyBnaXZlblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9ySW5mb1swXS5hcHBseShjb250ZXh0LCBhcmdzRm9yQ3VycmVudENvbnN0cnVjdG9yKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gSXQgaXMgY2FsbGVkIGJ5IGluamVjdG9yIHRvIGNyZWF0ZSBhbiBpbnN0YW5jZS5cbiAgY3JlYXRlKGFyZ3MpIHtcbiAgICB2YXIgY29udGV4dCA9IE9iamVjdC5jcmVhdGUodGhpcy5wcm92aWRlci5wcm90b3R5cGUpO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuX2NyZWF0ZUNvbnN0cnVjdG9yKDAsIGNvbnRleHQsIGFyZ3MpO1xuICAgIHZhciByZXR1cm5lZFZhbHVlID0gY29uc3RydWN0b3IoKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHJldHVybmVkVmFsdWUpIHx8IGlzT2JqZWN0KHJldHVybmVkVmFsdWUpKSB7XG4gICAgICByZXR1cm4gcmV0dXJuZWRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxufVxuXG5cbi8vIEZhY3RvcnlQcm92aWRlciBrbm93cyBob3cgdG8gY3JlYXRlIGluc3RhbmNlIGZyb20gYSBmYWN0b3J5IGZ1bmN0aW9uLlxuLy8gLSBhbGwgdGhlIHN0YXRlIGlzIGltbXV0YWJsZVxuY2xhc3MgRmFjdG9yeVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoZmFjdG9yeUZ1bmN0aW9uLCBwYXJhbXMsIGlzUHJvbWlzZSkge1xuICAgIHRoaXMucHJvdmlkZXIgPSBmYWN0b3J5RnVuY3Rpb247XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG5cbiAgICBmb3IgKHZhciBwYXJhbSBvZiBwYXJhbXMpIHtcbiAgICAgIGlmIChwYXJhbS50b2tlbiA9PT0gU3VwZXJDb25zdHJ1Y3RvckFubm90YXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RvU3RyaW5nKGZhY3RvcnlGdW5jdGlvbil9IGlzIG5vdCBhIGNsYXNzLiBPbmx5IGNsYXNzZXMgd2l0aCBhIHBhcmVudCBjYW4gYXNrIGZvciBTdXBlckNvbnN0cnVjdG9yIWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZShhcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm92aWRlckZyb21Gbk9yQ2xhc3MoZm5PckNsYXNzLCBhbm5vdGF0aW9ucykge1xuICBpZiAoaXNDbGFzcyhmbk9yQ2xhc3MpKSB7XG4gICAgcmV0dXJuIG5ldyBDbGFzc1Byb3ZpZGVyKGZuT3JDbGFzcywgYW5ub3RhdGlvbnMucGFyYW1zLCBhbm5vdGF0aW9ucy5wcm92aWRlLmlzUHJvbWlzZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IEZhY3RvcnlQcm92aWRlcihmbk9yQ2xhc3MsIGFubm90YXRpb25zLnBhcmFtcywgYW5ub3RhdGlvbnMucHJvdmlkZS5pc1Byb21pc2UpO1xufVxuIiwiT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXhwb3J0cywgJF9fcGxhY2Vob2xkZXJfXzApOyIsIntnZXQ6ICRfX3BsYWNlaG9sZGVyX18wfSIsImdldCAkX19wbGFjZWhvbGRlcl9fMCgpIHsgcmV0dXJuICRfX3BsYWNlaG9sZGVyX18xOyB9IiwiX19lc01vZHVsZTogdHJ1ZSIsInt2YWx1ZTogJF9fcGxhY2Vob2xkZXJfXzB9IiwiKCRfX3BsYWNlaG9sZGVyX18wID0gcmVxdWlyZSgkX19wbGFjZWhvbGRlcl9fMSksIFxuICAgICAgICAkX19wbGFjZWhvbGRlcl9fMiAmJiAkX19wbGFjZWhvbGRlcl9fMy5fX2VzTW9kdWxlICYmICRfX3BsYWNlaG9sZGVyX180IHx8IHtkZWZhdWx0OiAkX19wbGFjZWhvbGRlcl9fNX0pIiwidmFyICRfX3BsYWNlaG9sZGVyX18wID0gJF9fcGxhY2Vob2xkZXJfXzEiLCIoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKSgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yKSIsIlxuICAgICAgICBmb3IgKHZhciAkX19wbGFjZWhvbGRlcl9fMCA9XG4gICAgICAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18xW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzI7XG4gICAgICAgICAgICAgISgkX19wbGFjZWhvbGRlcl9fMyA9ICRfX3BsYWNlaG9sZGVyX180Lm5leHQoKSkuZG9uZTsgKSB7XG4gICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzU7XG4gICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzY7XG4gICAgICAgIH0iXX0=