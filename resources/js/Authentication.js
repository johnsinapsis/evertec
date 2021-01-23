import crypto from 'crypto'
import moment from 'moment'

/**
 * Generates authentication data in order to communicate with PlacetoPay Web Checkout service
 *
 * USAGE:
 *
 * var authGenerator = new RedirectionAuth("YOUR_LOGIN", "YOUR_TRANKEY");
 * var auth = authGenerator.asObject();
 *
 * IMPORTANT
 *
 * If you need to make another request and you have already the object instanciated, please make sure to
 * use the generate method BEFORE using the asObject again
 *
 * var auth = authGenerator.generate().asObject()
 *
 * @param login
 * @param tranKey
 * @constructor
 */
function RedirectionAuth(login, tranKey) {
    var self = this;
    var _nonce;
    var _seed;

    this.generate = function() {
        _nonce = Math.random().toString(32);
        _seed = moment().format();
        return self;
    };

    

    this.getRealNonce = function() {
        return _nonce;
    };

    this.login = function() {
        return login;
    };

    this.nonce = function() {
        let buff = new Buffer(_nonce)
        return buff.toString('base64');
    };

    this.seed = function() {
        return _seed;
    };

    this.tranKey = function() {
        let sha1 = crypto.createHash('sha1').update(_nonce + _seed + tranKey).digest();
        let buff = new Buffer(sha1)
        return buff.toString('base64')
    };

    this.asObject = function() {
        return {
            login: self.login(),
            tranKey: self.tranKey(),
            nonce: self.nonce(),
            seed: self.seed(),
        }
    };

    // For testing purposes

    this.setSeed = function(seed) {
        _seed = seed;
        return self;
    };

    this.setNonce = function(nonce) {
        _nonce = nonce;
        return self;
    };

    this.generate();
}

export default RedirectionAuth;