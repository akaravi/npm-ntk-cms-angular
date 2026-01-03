import { Injectable } from '@angular/core';
import { Icon, IconType } from './icon';
import { IconsPack } from './icons-pack';
import { FontAwesome4IconsPack } from './pack/font-awesome4-icons-pack';
import { FontAwesome5IconsPack } from './pack/font-awesome5-icons-pack';
import { FontAwesome6IconsPack } from './pack/font-awesome6-icons-pack';
import { MaterialIconsPack } from './pack/material-icons-pack';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PrimeIconsPack } from './pack/prime-icons-pack';

@Injectable()
export class IconPickerService {
  private fa4IconsPack: IconsPack;
  private fa5IconsPack: IconsPack;
  private fa6IconsPack: IconsPack;
  private matIconsPack: IconsPack;
  private primeIconsPack: IconsPack;

  constructor(protected faIconLibrary: FaIconLibrary) {
    this.fa4IconsPack = new FontAwesome4IconsPack();
    this.fa5IconsPack = new FontAwesome5IconsPack();
    this.fa6IconsPack = new FontAwesome6IconsPack();
    this.matIconsPack = new MaterialIconsPack();
    this.primeIconsPack = new PrimeIconsPack();
  }

  getIcons(ipIconPacks: string[]): Icon[] {
    const icons: Icon[] = [];
    ipIconPacks.forEach((ipIconPack) => {
      if (ipIconPack === 'fa' || ipIconPack === 'all') {
        const faIcons = this.fa4IconsPack.getIcons().map(icon => {
          icon.type = IconType.FontAwesome;
          return icon;
        });
        icons.push(...faIcons);
      }
      if (ipIconPack === 'fa5' || ipIconPack === 'all') {
        const fa5Icons = this.fa5IconsPack.getIcons().map(icon => {
          icon.type = IconType.FontAwesome5;
          return icon;
        });
        icons.push(...fa5Icons);
      }
      if (ipIconPack === 'fa6' || ipIconPack === 'all') {
        this.faIconLibrary.addIconPacks(fas);
        const fa6Icons = this.fa6IconsPack.getIcons()
          .filter(icon => this.isIconAvailable(icon.iconName))
          .map(icon => {
            icon.type = IconType.FontAwesome6;
            return icon;
          });
        icons.push(...fa6Icons);
      }
      if (ipIconPack === 'mat' || ipIconPack === 'all') {
        const matIcons = this.matIconsPack.getIcons().map(icon => {
          icon.type = IconType.Material;
          return icon;
        });
        icons.push(...matIcons);
      }
      if (ipIconPack === 'pi' || ipIconPack === 'all') {
        const primeIcons = this.primeIconsPack.getIcons().map(icon => {
          icon.type = IconType.PrimeIcons;
          return icon;
        });
        icons.push(...primeIcons);
      }
    });
    return icons;
  }

  // Check if a FontAwesome6 icon is available in the library
  private isIconAvailable(iconName: string): boolean {
    try {
      // Convert iconName from kebab-case to camelCase (e.g., "shield-cat" -> "faShieldCat")
      const camelCaseName = 'fa' + iconName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      
      // Try to access directly from fas object
      const iconKey = camelCaseName as keyof typeof fas;
      if (fas[iconKey]) {
        return true;
      }
      
      // Fallback: try findIconDefinition
      const iconDef = findIconDefinition({ prefix: 'fas', iconName: iconName as any });
      return iconDef !== null;
    } catch (error) {
      return false;
    }
  }
}
