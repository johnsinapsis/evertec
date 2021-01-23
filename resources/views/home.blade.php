@extends('layouts.app')

@section('content')
<div id="example"></div>
{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div> --}}
@endsection
@section('script')
<script>
    var urlBase = "{{url('')}}"
    var user = {
        id:{{Auth::user()->id}},
        role:{{Auth::user()->role}},
        name:'{{Auth::user()->name}}',
        email:'{{Auth::user()->email}}',
        phone:'{{Auth::user()->phone}}',
    }
    var login = '6dd490faf9cb87a9862245da41170ff2'
    var tranKey = '024h1IlD'
    
    //console.log(user);
</script>
@endsection
