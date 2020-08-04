export default class RawLDKObject {

	protected rawObject;

	public get object() {
		return this.rawObject;
	}

	// simply an alias for object
	public get direct() {
		return this.rawObject;
	}

	public get pointer() {
		return this.rawObject.ref();
	}

}
