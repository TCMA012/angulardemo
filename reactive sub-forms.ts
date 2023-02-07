/*
The Best Way to build reactive sub-forms with Angular
https://tomastrajan.medium.com/angular-reactive-sub-forms-type-safe-without-duplication-dbd24225e1e8

Angular reactive sub-form FormGroup

Let’s say we’re implementing a customer form. There will most likely be a part of that customer form which will hold address data. We will use Angular reactive forms and a nested FormGroup to describe address object with properties (and inputs) for stuff like street, city or zip code.

The implementation using provided FormBuilder will look something like this…
The address sub-form is implemented inline using formGroupName directive on the <div> which allows us to access nested form controls like fromControlName="street" which are children of that element directly instead of writing "street.address".

We’re defining a type FormGroupConfig which will accept some other generic type T, in our case it will be the Address interface.

The resulting type will have all the properties of an address because we’re iterating over them using [P in keyof T].

The value of each property (the reactive form config) will be an array with value which has to be of the same type as in Address interface because of T[P] . This is followed by optional any? to pass in validators array or even a full blown reactive form control config as we’re used to when implementing reactive forms.

The helper type can be made even more explicit to support all the possible form control configuration options in a type safe manner…
*/
export type FormGroupConfig<T> = {
    [P in keyof T]: [
            T[P] | { value: T[P]; disabled: boolean },
        (AbstractControlOptions | ValidatorFn | ValidatorFn[])?,
    ]
}



/*
https://stackoverflow.com/questions/66933164/recursive-typescript-types-and-reactive-form
*/


/*
https://angular.io/api/forms/FormGroupName
Syncs a nested FormGroup or FormRecord to a DOM element.


Angular reactive nested Form
*/

/*
https://stackoverflow.com/questions/62415787/angular-forms-best-practise-for-complex-nested-reactive-forms-and-validation-at




https://www.positronx.io/build-nested-form-using-angular-formarray/
*/