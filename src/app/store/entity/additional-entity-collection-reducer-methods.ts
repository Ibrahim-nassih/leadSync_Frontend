import {
  EntityAction,
  EntityCollection,
  EntityCollectionReducerMethods,
  EntityDefinition,
} from '@ngrx/data'

export class AdditionalEntityCollectionReducerMethods<T> extends EntityCollectionReducerMethods<T> {
  constructor(public override entityName: string, public override definition: EntityDefinition<T>) {
    super(entityName, definition)
  }
  protected override queryManySuccess(
      collection: EntityCollection<T>,
      action: EntityAction<T[]>,
  ): EntityCollection<T> {
    const ec = super.queryManySuccess(collection, action)
    if ((action.payload as any).totalElements >= 0) {
      // save the foo property from action.payload to entityCollection instance
      ;(ec as any).totalElements = (action.payload as any).totalElements as number
    }
    return ec
  }
}
