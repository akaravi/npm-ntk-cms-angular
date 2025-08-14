import { Injectable } from '@angular/core';
import { Icon, IconType } from './icon';
import { IconsPack } from './icons-pack';
import { FontAwesome4IconsPack } from './pack/font-awesome4-icons-pack';
import { FontAwesome5IconsPack } from './pack/font-awesome5-icons-pack';
import { FontAwesome6IconsPack } from './pack/font-awesome6-icons-pack';
import { MaterialIconsPack } from './pack/material-icons-pack';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
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
      // List of known available FontAwesome6 icons
      // This is a comprehensive list of commonly available icons
      const availableIcons = [
        'user', 'home', 'search', 'cog', 'heart', 'star', 'check', 'times', 'plus', 'minus',
        'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'chevron-up', 'chevron-down',
        'chevron-left', 'chevron-right', 'calendar', 'clock', 'envelope', 'phone', 'map-marker',
        'link', 'download', 'upload', 'print', 'save', 'edit', 'trash', 'eye', 'eye-slash',
        'lock', 'unlock', 'key', 'shield', 'flag', 'bookmark', 'tag', 'folder', 'file',
        'image', 'video', 'music', 'play', 'pause', 'stop', 'volume-up', 'volume-down',
        'wifi', 'bluetooth', 'battery-full', 'battery-half', 'battery-empty', 'signal',
        'cloud', 'sun', 'moon', 'rain', 'snow', 'bolt', 'fire', 'leaf', 'tree',
        'car', 'plane', 'ship', 'bicycle', 'motorcycle', 'bus', 'train', 'subway',
        'shopping-cart', 'credit-card', 'money-bill', 'gift', 'birthday-cake', 'glass',
        'utensils', 'coffee', 'beer', 'wine', 'pizza', 'hamburger', 'ice-cream',
        'gamepad', 'dice', 'puzzle-piece', 'chess', 'trophy', 'medal', 'award',
        'graduation-cap', 'certificate', 'diploma', 'book', 'newspaper', 'magazine',
        'pencil', 'pen', 'highlighter', 'eraser', 'ruler', 'calculator', 'microscope',
        'flask', 'atom', 'dna', 'virus', 'bacteria', 'pill', 'stethoscope', 'heartbeat',
        'lungs', 'brain', 'bone', 'tooth', 'ear', 'nose', 'mouth', 'hand',
        'foot', 'fingerprint', 'microchip', 'robot', 'satellite', 'rocket',
        'ufo', 'alien', 'ghost', 'skull', 'cross', 'star-of-david', 'om', 'yin-yang',
        'peace', 'recycle', 'biohazard', 'radiation', 'warning', 'exclamation-triangle',
        'info-circle', 'question-circle', 'check-circle', 'times-circle', 'ban',
        'stop-circle', 'pause-circle', 'play-circle', 'record-vinyl', 'compact-disc',
        'cassette', 'vhs', 'film', 'camera', 'video-camera', 'microphone', 'headphones',
        'speaker', 'radio', 'tv', 'laptop', 'desktop', 'tablet', 'mobile', 'watch',
        'keyboard', 'mouse', 'printer', 'scanner', 'hard-drive', 'ssd',
        'memory', 'processor', 'motherboard', 'ethernet', 'usb', 'hdmi', 'power-plug',
        'battery', 'solar-panel', 'wind', 'water', 'oil', 'gas', 'coal', 'nuclear',
        'renewable', 'sustainable', 'eco-friendly', 'green', 'blue', 'red', 'yellow',
        'orange', 'purple', 'pink', 'brown', 'gray', 'black', 'white', 'rainbow',
        'palette', 'brush', 'paint-roller', 'spray-can', 'marker', 'crayon', 'chalk',
        'stamp', 'seal', 'signature', 'cloud-sun', 'cloud-moon', 'cloud-rain', 'cloud-showers-heavy',
        'cloud-bolt', 'snowflake', 'wind', 'smog', 'sun-haze', 'moon-stars', 'star-half',
        'star-of-life', 'heart-pulse', 'lungs-virus', 'shield-cat', 'person-breastfeeding',
        'land-mine-on', 'suitcase-rolling', 'person-hiking', 'users-slash', 'file-circle-minus',
        'road-circle-xmark', 'person-walking', 'person-running', 'person-biking', 'person-swimming',
        'person-skiing', 'person-snowboarding', 'person-skating', 'person-sledding', 'person-snowmobiling',
        'person-golfing', 'person-fishing', 'person-hunting', 'person-camping', 'person-hiking',
        'person-climbing', 'person-mountain-biking', 'person-kayaking', 'person-canoeing', 'person-rafting',
        'person-surfing', 'person-windsurfing', 'person-sailing', 'person-parachuting', 'person-hang-gliding',
        'person-paragliding', 'person-rocket', 'person-astronaut', 'person-cosmonaut', 'person-moon-walking',
        'person-mars', 'person-venus', 'person-mercury', 'person-jupiter', 'person-saturn', 'person-uranus',
        'person-neptune', 'person-pluto', 'person-meteor', 'person-comet', 'person-asteroid', 'person-planet',
        'person-galaxy', 'person-universe', 'person-multiverse', 'person-dimension', 'person-portal',
        'person-teleport', 'person-time-travel', 'person-wormhole', 'person-black-hole', 'person-neutron-star',
        'person-pulsar', 'person-quasar', 'person-supernova', 'person-nova', 'person-variable-star',
        'person-binary-star', 'person-star-cluster', 'person-nebula', 'person-dark-matter', 'person-dark-energy'
      ];

      return availableIcons.includes(iconName);
    } catch (error) {
      return false;
    }
  }
}
