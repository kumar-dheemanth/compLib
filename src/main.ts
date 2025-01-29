interface ResizeEvent {
    width: number;
    height: number;
  }
  
  @Directive({
    selector: '[appResizeObserver]',
  })
  export class ResizeObserverDirective implements OnInit, OnDestroy {
    @Output() resize = new EventEmitter<ResizeEvent>();
    private resizeObserver!: ResizeObserver;
  
    constructor(private elementRef: ElementRef, private ngZone: NgZone) {}
  
    ngOnInit(): void {
      this.resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.contentRect) {
            const { width, height } = entry.contentRect;
            // Run inside Angular's zone to trigger change detection
            this.ngZone.run(() => this.resize.emit({ width, height }));
          }
        }
      });
      this.resizeObserver.observe(this.elementRef.nativeElement);
    }
  
    ngOnDestroy(): void {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    }
  }