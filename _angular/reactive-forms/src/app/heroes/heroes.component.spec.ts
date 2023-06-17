import { of } from 'rxjs';
import { HeroService } from '../hero/hero.service';
import { HeroesComponent } from './heroes.component';

describe('delete', () => {
  let component: HeroesComponent;
  let HEROES: any[];
  let heroService: any;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderMan', strength: 8 },
      { id: 2, name: 'SpiderMan 2', strength: 24 },
      { id: 3, name: 'SuperMan', strength: 55 },
    ];

    heroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(heroService);
  });

  it('should remove the indicated hero from the heroes list', () => {
    heroService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;

    component.delete(HEROES[2]);

    expect(component.heroes.length).toBe(2);
  });

  it('should call deleteHero', () => {
    heroService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;

    component.delete(HEROES[2]);

    expect(heroService.deleteHero).toHaveBeenCalled();
    expect(heroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
  });
});
