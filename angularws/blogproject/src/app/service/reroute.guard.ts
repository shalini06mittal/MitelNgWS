import { CanDeactivateFn } from '@angular/router';
import { BlogformComponent } from '../blogform/blogform.component';

export const rerouteGuard: CanDeactivateFn<BlogformComponent> = (component:BlogformComponent, currentRoute, currentState, nextState) => {
  console.log('rerouting..')
  console.log(component)
  return component.isSubmit || window.confirm('Are you sure you want to navigate away')
};
