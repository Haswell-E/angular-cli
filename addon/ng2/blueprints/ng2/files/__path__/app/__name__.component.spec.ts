import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { <%= jsComponentName %>AppComponent } from '../app/<%= htmlComponentName %>.component';

beforeEachProviders(() => [<%= jsComponentName %>AppComponent]);

describe('App: <%= jsComponentName %>', () => {
  it('should create the app', inject([<%= jsComponentName %>AppComponent], (app: <%= jsComponentName %>AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'<%= htmlComponentName %> works!\'', inject([<%= jsComponentName %>AppComponent], (app: <%= jsComponentName %>AppComponent) => {
    expect(app.title).toEqual('<%= htmlComponentName %> works!');
  }));
});
