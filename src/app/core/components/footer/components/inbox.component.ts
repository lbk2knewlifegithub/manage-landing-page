import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-inbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form>
      <!-- email form -->
      <div class="flex gap-4 justify-between items-center">
        <input
          class="w-full py-3 pl-6 text-sm rounded-full placeholder:text-gray-400"
          type="email"
          placeholder="Updates in your inbox..."
        />

        <!-- submit button -->
        <button class="text-xs shadow-lg btn btn-primary px-7">GO</button>
        <!-- end submit button -->
      </div>
      <!-- end email form -->
    </form>
  `,
})
export class InboxComponent {}
