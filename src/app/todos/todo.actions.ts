import { createAction, props } from "@ngrx/store";

export const create = createAction(
    '[ToDo] Create new ToDo',
    props<{text: string}>()
)

export const toggle = createAction(
    '[ToDo] Toggle ToDo status',
    props<{id: number}>()
)

export const edit = createAction(
    '[ToDo] Editing ToDo description',
    props<{id: number, text: string}>()
)

export const remove = createAction(
    '[ToDo] Remove ToDo',
    props<{id: number}>()
)

export const toggleAll = createAction(
    '[ToDo] Toggle all ToDos status',
    props<{setAllAs: boolean}>()
)

export const removeCompleted = createAction(
    '[ToDo] Remove completed ToDos'
)