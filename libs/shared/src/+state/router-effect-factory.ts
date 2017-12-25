import { Router } from "@angular/router";
import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";

export class RouterEffectFactory {

  static buildNavigateOnActionEffect( actions$: Actions, router: Router, actionType: string, navigationTarget: string[] ): Observable<Action> {
    return actions$.ofType( actionType ).pipe(
      tap( () => router.navigate( navigationTarget ) )
    );
  }
}
